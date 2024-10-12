# UpdateJobDetails

Job details for update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_details** | [**ContactDetails**](ContactDetails.md) |  | [optional] 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_job_details import UpdateJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateJobDetails from a JSON string
update_job_details_instance = UpdateJobDetails.from_json(json)
# print the JSON string representation of the object
print(UpdateJobDetails.to_json())

# convert the object into a dict
update_job_details_dict = update_job_details_instance.to_dict()
# create an instance of UpdateJobDetails from a dict
update_job_details_from_dict = UpdateJobDetails.from_dict(update_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


