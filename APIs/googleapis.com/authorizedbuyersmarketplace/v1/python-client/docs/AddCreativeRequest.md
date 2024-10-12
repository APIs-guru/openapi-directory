# AddCreativeRequest

Request message for adding creative to be used in the bidding process for the finalized deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative** | **str** | Name of the creative to add to the finalized deal, in the format &#x60;buyers/{buyerAccountId}/creatives/{creativeId}&#x60;. See creative.name. | [optional] 

## Example

```python
from openapi_client.models.add_creative_request import AddCreativeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddCreativeRequest from a JSON string
add_creative_request_instance = AddCreativeRequest.from_json(json)
# print the JSON string representation of the object
print(AddCreativeRequest.to_json())

# convert the object into a dict
add_creative_request_dict = add_creative_request_instance.to_dict()
# create an instance of AddCreativeRequest from a dict
add_creative_request_from_dict = AddCreativeRequest.from_dict(add_creative_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


