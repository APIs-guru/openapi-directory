package shared

type SubnetCidrBlockStateCodeEnum string

const (
	SubnetCidrBlockStateCodeEnumAssociating    SubnetCidrBlockStateCodeEnum = "associating"
	SubnetCidrBlockStateCodeEnumAssociated     SubnetCidrBlockStateCodeEnum = "associated"
	SubnetCidrBlockStateCodeEnumDisassociating SubnetCidrBlockStateCodeEnum = "disassociating"
	SubnetCidrBlockStateCodeEnumDisassociated  SubnetCidrBlockStateCodeEnum = "disassociated"
	SubnetCidrBlockStateCodeEnumFailing        SubnetCidrBlockStateCodeEnum = "failing"
	SubnetCidrBlockStateCodeEnumFailed         SubnetCidrBlockStateCodeEnum = "failed"
)
