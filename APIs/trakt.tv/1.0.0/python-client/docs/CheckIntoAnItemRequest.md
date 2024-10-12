# CheckIntoAnItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_date** | **str** |  | [optional] 
**app_version** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**movie** | [**CheckIntoAnItemRequestMovie**](CheckIntoAnItemRequestMovie.md) |  | [optional] 
**sharing** | [**CheckIntoAnItemRequestSharing**](CheckIntoAnItemRequestSharing.md) |  | [optional] 

## Example

```python
from openapi_client.models.check_into_an_item_request import CheckIntoAnItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckIntoAnItemRequest from a JSON string
check_into_an_item_request_instance = CheckIntoAnItemRequest.from_json(json)
# print the JSON string representation of the object
print(CheckIntoAnItemRequest.to_json())

# convert the object into a dict
check_into_an_item_request_dict = check_into_an_item_request_instance.to_dict()
# create an instance of CheckIntoAnItemRequest from a dict
check_into_an_item_request_from_dict = CheckIntoAnItemRequest.from_dict(check_into_an_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


