package shared

type VpcCidrBlockStateCodeEnum string

const (
	VpcCidrBlockStateCodeEnumAssociating    VpcCidrBlockStateCodeEnum = "associating"
	VpcCidrBlockStateCodeEnumAssociated     VpcCidrBlockStateCodeEnum = "associated"
	VpcCidrBlockStateCodeEnumDisassociating VpcCidrBlockStateCodeEnum = "disassociating"
	VpcCidrBlockStateCodeEnumDisassociated  VpcCidrBlockStateCodeEnum = "disassociated"
	VpcCidrBlockStateCodeEnumFailing        VpcCidrBlockStateCodeEnum = "failing"
	VpcCidrBlockStateCodeEnumFailed         VpcCidrBlockStateCodeEnum = "failed"
)
