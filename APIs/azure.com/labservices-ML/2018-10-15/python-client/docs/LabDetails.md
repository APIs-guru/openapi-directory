# LabDetails

This represents the details about a lab that the User is in, and its state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Id of the lab. | [optional] 
**name** | **str** | Name of the lab | [optional] 
**provisioning_state** | **str** | The provisioning state of the lab. | [optional] 
**usage_quota** | **str** | The maximum duration a user can use a VM in this lab. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab_details import LabDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LabDetails from a JSON string
lab_details_instance = LabDetails.from_json(json)
# print the JSON string representation of the object
print(LabDetails.to_json())

# convert the object into a dict
lab_details_dict = lab_details_instance.to_dict()
# create an instance of LabDetails from a dict
lab_details_from_dict = LabDetails.from_dict(lab_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


