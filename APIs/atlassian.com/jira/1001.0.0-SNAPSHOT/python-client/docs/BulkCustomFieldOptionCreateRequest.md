# BulkCustomFieldOptionCreateRequest

Details of the options to create for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | [**List[CustomFieldOptionCreate]**](CustomFieldOptionCreate.md) | Details of options to create. | [optional] 

## Example

```python
from openapi_client.models.bulk_custom_field_option_create_request import BulkCustomFieldOptionCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCustomFieldOptionCreateRequest from a JSON string
bulk_custom_field_option_create_request_instance = BulkCustomFieldOptionCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BulkCustomFieldOptionCreateRequest.to_json())

# convert the object into a dict
bulk_custom_field_option_create_request_dict = bulk_custom_field_option_create_request_instance.to_dict()
# create an instance of BulkCustomFieldOptionCreateRequest from a dict
bulk_custom_field_option_create_request_from_dict = BulkCustomFieldOptionCreateRequest.from_dict(bulk_custom_field_option_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


