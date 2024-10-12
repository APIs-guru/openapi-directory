# FundingReversal144Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**funding_reversal** | [**FundingReversal144**](FundingReversal144.md) |  | [optional] 

## Example

```python
from openapi_client.models.funding_reversal144_wrapper import FundingReversal144Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of FundingReversal144Wrapper from a JSON string
funding_reversal144_wrapper_instance = FundingReversal144Wrapper.from_json(json)
# print the JSON string representation of the object
print(FundingReversal144Wrapper.to_json())

# convert the object into a dict
funding_reversal144_wrapper_dict = funding_reversal144_wrapper_instance.to_dict()
# create an instance of FundingReversal144Wrapper from a dict
funding_reversal144_wrapper_from_dict = FundingReversal144Wrapper.from_dict(funding_reversal144_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


