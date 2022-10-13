package operations

type PackageTypesRemovePackageTypeUserPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	UserID int32  `pathParam:"style=simple,explode=false,name=userID"`
}

type PackageTypesRemovePackageTypeUserRequest struct {
	PathParams PackageTypesRemovePackageTypeUserPathParams
}

type PackageTypesRemovePackageTypeUserResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
