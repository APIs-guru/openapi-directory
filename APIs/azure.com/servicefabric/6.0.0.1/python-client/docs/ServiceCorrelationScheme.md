# ServiceCorrelationScheme

The service correlation scheme. Possible values are following.    - Invalid - An invalid correlation scheme. Cannot be used. The value is zero.   - Affinity - Indicates that this service has an affinity relationship with another service. Provided for backwards compatibility, consider preferring the Aligned or NonAlignedAffinity options. The value is 1.   - AlignedAffinity - Aligned affinity ensures that the primaries of the partitions of the affinitized services are collocated on the same nodes. This is the default and is the same as selecting the Affinity scheme. The value is 2.   - NonAlignedAffinity - Non-Aligned affinity guarantees that all replicas of each service will be placed on the same nodes. Unlike Aligned Affinity, this does not guarantee that replicas of particular role will be collocated. The value is 3. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `AFFINITY` (value: `'Affinity'`)

* `ALIGNEDAFFINITY` (value: `'AlignedAffinity'`)

* `NONALIGNEDAFFINITY` (value: `'NonAlignedAffinity'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


