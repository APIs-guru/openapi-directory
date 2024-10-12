# ApiRevisionsList200ResponseValueInner

Summary of revision metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** | Identifier of the API Revision. | [optional] [readonly] 
**api_revision** | **str** | Revision number of API. | [optional] [readonly] 
**created_date_time** | **datetime** | The time the API Revision was created. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. | [optional] [readonly] 
**description** | **str** | Description of the API Revision. | [optional] [readonly] 
**is_current** | **bool** | Indicates if API revision is accessible via the gateway. | [optional] [readonly] 
**is_online** | **bool** | Indicates if API revision is the current api revision. | [optional] [readonly] 
**private_url** | **str** | Gateway URL for accessing the non-current API Revision. | [optional] [readonly] 
**updated_date_time** | **datetime** | The time the API Revision were updated. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_revisions_list200_response_value_inner import ApiRevisionsList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiRevisionsList200ResponseValueInner from a JSON string
api_revisions_list200_response_value_inner_instance = ApiRevisionsList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ApiRevisionsList200ResponseValueInner.to_json())

# convert the object into a dict
api_revisions_list200_response_value_inner_dict = api_revisions_list200_response_value_inner_instance.to_dict()
# create an instance of ApiRevisionsList200ResponseValueInner from a dict
api_revisions_list200_response_value_inner_from_dict = ApiRevisionsList200ResponseValueInner.from_dict(api_revisions_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


