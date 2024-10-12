# ChaosEventKind

The kind of Chaos event.  - Invalid - Indicates an invalid Chaos event kind. All Service Fabric enumerations have the invalid type. The valus is zero. - Started - Indicates a Chaos event that gets generated when Chaos is started. - ExecutingFaults - Indicates a Chaos event that gets generated when Chaos has decided on the faults for an iteration. This Chaos event contains the details of the faults as a list of strings. - Waiting - Indicatges a Chaos event that gets generated when Chaos is waiting for the cluster to become ready for faulting, for example, Chaos may be waiting for the on-going upgrade to finish. - ValidationFailed - Indicates a Chaos event that gets generated when the cluster entities do not become stable and healthy within ChaosParameters.MaxClusterStabilizationTimeoutInSeconds. - TestError - Indicates a Chaos event that gets generated when an unexpected event has occurred in the Chaos engine, for example, due to the cluster snapshot being inconsistent, while faulting a faultable entity Chaos found that the entity was alreay faulted. - Stopped - Indicates a Chaos event that gets generated when Chaos stops because either the user issued a stop or the time to run was up. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `STARTED` (value: `'Started'`)

* `EXECUTINGFAULTS` (value: `'ExecutingFaults'`)

* `WAITING` (value: `'Waiting'`)

* `VALIDATIONFAILED` (value: `'ValidationFailed'`)

* `TESTERROR` (value: `'TestError'`)

* `STOPPED` (value: `'Stopped'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


