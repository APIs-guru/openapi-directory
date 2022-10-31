package operations



type PackageTypesAddPackageTypeUserPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID int32 `pathParam:"style=simple,explode=false,name=userID"`
    
}

type PackageTypesAddPackageTypeUserRequest struct {
    PathParams PackageTypesAddPackageTypeUserPathParams 
    
}

type PackageTypesAddPackageTypeUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

