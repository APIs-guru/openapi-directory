# CapacityCommitment

Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_end_time** | **str** | Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments. | [optional] [readonly] 
**commitment_start_time** | **str** | Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments. | [optional] [readonly] 
**failure_status** | [**Status**](Status.md) |  | [optional] 
**multi_region_auxiliary** | **bool** | Applicable only for commitments located within one of the BigQuery multi-regions (US or EU). If set to true, this commitment is placed in the organization&#39;s secondary region which is designated for disaster recovery purposes. If false, this commitment is placed in the organization&#39;s default region. | [optional] 
**name** | **str** | Output only. The resource name of the capacity commitment, e.g., &#x60;projects/myproject/locations/US/capacityCommitments/123&#x60; The commitment_id must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. | [optional] [readonly] 
**plan** | **str** | Capacity commitment commitment plan. | [optional] 
**renewal_plan** | **str** | The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments. | [optional] 
**slot_count** | **str** | Number of slots in this commitment. | [optional] 
**state** | **str** | Output only. State of the commitment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.capacity_commitment import CapacityCommitment

# TODO update the JSON string below
json = "{}"
# create an instance of CapacityCommitment from a JSON string
capacity_commitment_instance = CapacityCommitment.from_json(json)
# print the JSON string representation of the object
print(CapacityCommitment.to_json())

# convert the object into a dict
capacity_commitment_dict = capacity_commitment_instance.to_dict()
# create an instance of CapacityCommitment from a dict
capacity_commitment_from_dict = CapacityCommitment.from_dict(capacity_commitment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


