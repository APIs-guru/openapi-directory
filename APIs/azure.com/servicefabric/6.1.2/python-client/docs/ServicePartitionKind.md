# ServicePartitionKind

The kind of partitioning scheme used to partition the service. Possible values are following.      - Invalid - Indicates the partition kind is invalid. All Service Fabric enumerations have the invalid type. The value is zero.     - Singleton - Indicates that there is only one partition, and SingletonPartitionSchemeDescription was specified while creating the service. The value is 1.     - Int64Range - Indicates that the partition is based on Int64 key ranges, and UniformInt64RangePartitionSchemeDescription was specified while creating the service. The value is 2.     - Named - Indicates that the partition is based on string names, and NamedPartitionInformation  was specified while creating the service. The value is 3. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `SINGLETON` (value: `'Singleton'`)

* `INT64RANGE` (value: `'Int64Range'`)

* `NAMED` (value: `'Named'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


