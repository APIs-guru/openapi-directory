# MeteringMembershipState

**Metering**: Per-Membership Feature State.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_measurement_time** | **str** | The time stamp of the most recent measurement of the number of vCPUs in the cluster. | [optional] 
**precise_last_measured_cluster_vcpu_capacity** | **float** | The vCPUs capacity in the cluster according to the most recent measurement (1/1000 precision). | [optional] 

## Example

```python
from openapi_client.models.metering_membership_state import MeteringMembershipState

# TODO update the JSON string below
json = "{}"
# create an instance of MeteringMembershipState from a JSON string
metering_membership_state_instance = MeteringMembershipState.from_json(json)
# print the JSON string representation of the object
print(MeteringMembershipState.to_json())

# convert the object into a dict
metering_membership_state_dict = metering_membership_state_instance.to_dict()
# create an instance of MeteringMembershipState from a dict
metering_membership_state_from_dict = MeteringMembershipState.from_dict(metering_membership_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


