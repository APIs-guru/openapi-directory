package shared

type CrTypeEnum string

const (
	CrTypeEnumEc2         CrTypeEnum = "EC2"
	CrTypeEnumSpot        CrTypeEnum = "SPOT"
	CrTypeEnumFargate     CrTypeEnum = "FARGATE"
	CrTypeEnumFargateSpot CrTypeEnum = "FARGATE_SPOT"
)
