# FundingTransfer118Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**funding_transfer** | [**FundingTransfer118**](FundingTransfer118.md) |  | [optional] 

## Example

```python
from openapi_client.models.funding_transfer118_wrapper import FundingTransfer118Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of FundingTransfer118Wrapper from a JSON string
funding_transfer118_wrapper_instance = FundingTransfer118Wrapper.from_json(json)
# print the JSON string representation of the object
print(FundingTransfer118Wrapper.to_json())

# convert the object into a dict
funding_transfer118_wrapper_dict = funding_transfer118_wrapper_instance.to_dict()
# create an instance of FundingTransfer118Wrapper from a dict
funding_transfer118_wrapper_from_dict = FundingTransfer118Wrapper.from_dict(funding_transfer118_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


