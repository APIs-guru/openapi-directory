package shared

// TrunkInterfaceAssociation
// <note> <p>Currently available in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Information about an association between a branch network interface with a trunk network interface.</p>
type TrunkInterfaceAssociation struct {
	AssociationID     *string
	BranchInterfaceID *string
	GreKey            *int64
	InterfaceProtocol *InterfaceProtocolTypeEnum
	Tags              []Tag
	TrunkInterfaceID  *string
	VlanID            *int64
}
