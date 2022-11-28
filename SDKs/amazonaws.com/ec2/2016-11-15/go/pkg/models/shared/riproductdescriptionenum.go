package shared

type RiProductDescriptionEnum string

const (
	RiProductDescriptionEnumLinuxUnix          RiProductDescriptionEnum = "Linux/UNIX"
	RiProductDescriptionEnumLinuxUnixAmazonVpc RiProductDescriptionEnum = "Linux/UNIX (Amazon VPC)"
	RiProductDescriptionEnumWindows            RiProductDescriptionEnum = "Windows"
	RiProductDescriptionEnumWindowsAmazonVpc   RiProductDescriptionEnum = "Windows (Amazon VPC)"
)
