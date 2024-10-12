# CheckDataAccessRequest

Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_list** | [**ConsentList**](ConsentList.md) |  | [optional] 
**data_id** | **str** | Required. The unique identifier of the resource to check access for. This identifier must correspond to a User data mapping in the given consent store. | [optional] 
**request_attributes** | **Dict[str, str]** | The values of request attributes associated with this access request. | [optional] 
**response_view** | **str** | Optional. The view for CheckDataAccessResponse. If unspecified, defaults to &#x60;BASIC&#x60; and returns &#x60;consented&#x60; as &#x60;TRUE&#x60; or &#x60;FALSE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.check_data_access_request import CheckDataAccessRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckDataAccessRequest from a JSON string
check_data_access_request_instance = CheckDataAccessRequest.from_json(json)
# print the JSON string representation of the object
print(CheckDataAccessRequest.to_json())

# convert the object into a dict
check_data_access_request_dict = check_data_access_request_instance.to_dict()
# create an instance of CheckDataAccessRequest from a dict
check_data_access_request_from_dict = CheckDataAccessRequest.from_dict(check_data_access_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


