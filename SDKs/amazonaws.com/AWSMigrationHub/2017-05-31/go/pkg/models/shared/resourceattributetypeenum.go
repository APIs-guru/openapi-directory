package shared




type ResourceAttributeTypeEnum string

const (
    ResourceAttributeTypeEnumIpv4Address ResourceAttributeTypeEnum = "IPV4_ADDRESS"
ResourceAttributeTypeEnumIpv6Address ResourceAttributeTypeEnum = "IPV6_ADDRESS"
ResourceAttributeTypeEnumMacAddress ResourceAttributeTypeEnum = "MAC_ADDRESS"
ResourceAttributeTypeEnumFqdn ResourceAttributeTypeEnum = "FQDN"
ResourceAttributeTypeEnumVMManagerID ResourceAttributeTypeEnum = "VM_MANAGER_ID"
ResourceAttributeTypeEnumVMManagedObjectReference ResourceAttributeTypeEnum = "VM_MANAGED_OBJECT_REFERENCE"
ResourceAttributeTypeEnumVMName ResourceAttributeTypeEnum = "VM_NAME"
ResourceAttributeTypeEnumVMPath ResourceAttributeTypeEnum = "VM_PATH"
ResourceAttributeTypeEnumBiosID ResourceAttributeTypeEnum = "BIOS_ID"
ResourceAttributeTypeEnumMotherboardSerialNumber ResourceAttributeTypeEnum = "MOTHERBOARD_SERIAL_NUMBER"
)


