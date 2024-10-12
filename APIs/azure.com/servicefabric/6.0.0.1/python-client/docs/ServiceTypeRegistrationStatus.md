# ServiceTypeRegistrationStatus

The status of the service type registration on the node. Possible values are following.    - Invalid - Indicates the registration status is invalid. All Service Fabric enumerations have the invalid type. The value is zero.   - Disabled - Indicates that the service type is disabled on this node. A type gets disabled when there are too many failures of the code package hosting the service type. If the service type is disabled, new replicas of that service type will not be placed on the node until it is enabled again. The service type is enabled again after the process hosting it comes up and re-registers the type or a preconfigured time interval has passed. The value is 1.   - Enabled - Indicates that the service type is enabled on this node. Replicas of this service type can be placed on this node when the code package registeres the service type. The value is 2.   - Registered - Indicates that the sevice type is enabled and registered on the node by a code package. Replicas of this service type can now be olaced on this node. The value is 3. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `DISABLED` (value: `'Disabled'`)

* `ENABLED` (value: `'Enabled'`)

* `REGISTERED` (value: `'Registered'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


