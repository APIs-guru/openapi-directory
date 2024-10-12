# BulkCustomFieldOptionUpdateRequest

Details of the options to update for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**List[CustomFieldOptionUpdate]**](CustomFieldOptionUpdate.md) | Details of the options to update. | [optional] 

## Example

```python
from openapi_client.models.bulk_custom_field_option_update_request import BulkCustomFieldOptionUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCustomFieldOptionUpdateRequest from a JSON string
bulk_custom_field_option_update_request_instance = BulkCustomFieldOptionUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCustomFieldOptionUpdateRequest.to_json())

# convert the object into a dict
bulk_custom_field_option_update_request_dict = bulk_custom_field_option_update_request_instance.to_dict()
# create an instance of BulkCustomFieldOptionUpdateRequest from a dict
bulk_custom_field_option_update_request_from_dict = BulkCustomFieldOptionUpdateRequest.from_dict(bulk_custom_field_option_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


