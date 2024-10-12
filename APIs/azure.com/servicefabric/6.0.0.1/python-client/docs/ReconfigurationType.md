# ReconfigurationType

The type of reconfiguration for replica of a stateful service. Possible values are following.   - Unknown - Indicates the invalid reconfiguration type.   - SwapPrimary - Specifies that the primary replica is being swapped with a different replica.   - Failover - Reconfiguration triggered in response to a primary going down. This could be due to many reasons such as primary replica crashing etc.   - Other - Reconfigurations where the primary replica is not changing. 

## Enum

* `UNKNOWN` (value: `'Unknown'`)

* `SWAPPRIMARY` (value: `'SwapPrimary'`)

* `FAILOVER` (value: `'Failover'`)

* `OTHER` (value: `'Other'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


