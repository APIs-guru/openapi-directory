# ServicePlacementPolicyType

The type of placement policy for a service fabric service. Following are the possible values.    - Invalid - Indicates the type of the placement policy is invalid. All Service Fabric enumerations have the invalid type. The value is zero.   - InvalidDomain - Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementInvalidDomainPolicyDescription, which indicates that a particular fault or upgrade domain cannot be used for placement of this service. The value is 1.   - RequiredDomain - Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription indicating that the replicas of the service must be placed in a specific domain. The value is 2.   - PreferredPrimaryDomain - Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementPreferPrimaryDomainPolicyDescription, which indicates that if possible the Primary replica for the partitions of the service should be located in a particular domain as an optimization. The value is 3.   - RequiredDomainDistribution - Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementRequireDomainDistributionPolicyDescription, indicating that the system will disallow placement of any two replicas from the same partition in the same domain at any time. The value is 4.   - NonPartiallyPlaceService - Indicates that the ServicePlacementPolicyDescription is of type ServicePlacementNonPartiallyPlaceServicePolicyDescription, which indicates that if possible all replicas of a particular partition of the service should be placed atomically. The value is 5. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `INVALIDDOMAIN` (value: `'InvalidDomain'`)

* `REQUIREDDOMAIN` (value: `'RequiredDomain'`)

* `PREFERREDPRIMARYDOMAIN` (value: `'PreferredPrimaryDomain'`)

* `REQUIREDDOMAINDISTRIBUTION` (value: `'RequiredDomainDistribution'`)

* `NONPARTIALLYPLACESERVICE` (value: `'NonPartiallyPlaceService'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


