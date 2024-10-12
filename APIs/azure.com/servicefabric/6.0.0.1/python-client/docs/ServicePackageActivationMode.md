# ServicePackageActivationMode

The activation mode of service package to be used for a Service Fabric service. This is specified at the time of creating the Service. Possible values are following.    - SharedProcess - This is the default activation mode. With this activation mode, replicas or instances from different partition(s) of service, on a given node, will share same activation of service package on a node. The value is zero.   - ExclusiveProcess - With this activation mode, each replica or instance of service, on a given node, will have its own dedicated activation of service package on a node. The value is 1. 

## Enum

* `SHAREDPROCESS` (value: `'SharedProcess'`)

* `EXCLUSIVEPROCESS` (value: `'ExclusiveProcess'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


