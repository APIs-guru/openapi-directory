# PartitionScheme

Enumerates the ways that a service can be partitioned. Possible values are:  - Invalid - Indicates the partition kind is invalid. All Service Fabric enumerations have the invalid type. The value is zero. - Singleton - Indicates that the partition is based on string names, and is a SingletonPartitionSchemeDescription object, The value is 1. - UniformInt64Range - Indicates that the partition is based on Int64 key ranges, and is a UniformInt64RangePartitionSchemeDescription object. The value is 2. - Named - Indicates that the partition is based on string names, and is a NamedPartitionSchemeDescription object. The value is 3 

## Enum

* `INVALID` (value: `'Invalid'`)

* `SINGLETON` (value: `'Singleton'`)

* `UNIFORMINT64RANGE` (value: `'UniformInt64Range'`)

* `NAMED` (value: `'Named'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


