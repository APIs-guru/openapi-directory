# UpdateJobProperties

Job Properties for update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_account_details** | [**List[DestinationAccountDetails]**](DestinationAccountDetails.md) | Destination account details. | [optional] 
**details** | [**UpdateJobDetails**](UpdateJobDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_job_properties import UpdateJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateJobProperties from a JSON string
update_job_properties_instance = UpdateJobProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateJobProperties.to_json())

# convert the object into a dict
update_job_properties_dict = update_job_properties_instance.to_dict()
# create an instance of UpdateJobProperties from a dict
update_job_properties_from_dict = UpdateJobProperties.from_dict(update_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


