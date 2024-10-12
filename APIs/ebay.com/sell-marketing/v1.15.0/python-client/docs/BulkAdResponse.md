# BulkAdResponse

This type defines the fields for the create ads in bulk response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[AdResponse]**](AdResponse.md) | This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed. | [optional] 

## Example

```python
from openapi_client.models.bulk_ad_response import BulkAdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkAdResponse from a JSON string
bulk_ad_response_instance = BulkAdResponse.from_json(json)
# print the JSON string representation of the object
print(BulkAdResponse.to_json())

# convert the object into a dict
bulk_ad_response_dict = bulk_ad_response_instance.to_dict()
# create an instance of BulkAdResponse from a dict
bulk_ad_response_from_dict = BulkAdResponse.from_dict(bulk_ad_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


