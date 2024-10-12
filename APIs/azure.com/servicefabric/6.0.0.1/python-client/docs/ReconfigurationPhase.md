# ReconfigurationPhase

The reconfiguration phase of a replica of a stateful service. Possible values are following.   - Unknown - Indicates the invalid reconfiguration phase.   - None - Specifies that there is no reconfiguration in progress.   - Phase0 - Refers to the phase where the reconfiguration is transferring data from the previous primary to the new primary.   - Phase1 - Refers to the phase where the reconfiguration is querying the replica set for the progress.   - Phase2 - Refers to the phase where the reconfiguration is ensuring that data from the current primary is present in a majority of the replica set.   - Phase3 - This phase is for internal use only.   - Phase4 - This phase is for internal use only.   - AbortPhaseZero - This phase is for internal use only. 

## Enum

* `UNKNOWN` (value: `'Unknown'`)

* `NONE` (value: `'None'`)

* `PHASE0` (value: `'Phase0'`)

* `PHASE1` (value: `'Phase1'`)

* `PHASE2` (value: `'Phase2'`)

* `PHASE3` (value: `'Phase3'`)

* `PHASE4` (value: `'Phase4'`)

* `ABORTPHASEZERO` (value: `'AbortPhaseZero'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


