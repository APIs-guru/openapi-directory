# ArdefRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_number** | **str** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 19 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Cardholder&#39;s card number. | 
**merchant_id** | **int** | &lt;strong&gt;Format: &lt;/strong&gt;Variable length, up to 12 N&lt;br&gt;&lt;strong&gt;Description: &lt;/strong&gt;Unique identifier on the Qualpay system. | 

## Example

```python
from openapi_client.models.ardef_request import ArdefRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ArdefRequest from a JSON string
ardef_request_instance = ArdefRequest.from_json(json)
# print the JSON string representation of the object
print(ArdefRequest.to_json())

# convert the object into a dict
ardef_request_dict = ardef_request_instance.to_dict()
# create an instance of ArdefRequest from a dict
ardef_request_from_dict = ArdefRequest.from_dict(ardef_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


