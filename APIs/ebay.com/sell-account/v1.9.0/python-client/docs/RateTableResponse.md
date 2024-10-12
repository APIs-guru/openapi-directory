# RateTableResponse

This type is the base response of the <b>getRateTables</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_tables** | [**List[RateTable]**](RateTable.md) | An array of all shipping rate tables defined for a marketplace (or all marketplaces if no &lt;b&gt;country_code&lt;/b&gt; query parameter is used). This array will be returned as empty if the seller has no defined shipping rate tables for the specified marketplace. | [optional] 

## Example

```python
from openapi_client.models.rate_table_response import RateTableResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RateTableResponse from a JSON string
rate_table_response_instance = RateTableResponse.from_json(json)
# print the JSON string representation of the object
print(RateTableResponse.to_json())

# convert the object into a dict
rate_table_response_dict = rate_table_response_instance.to_dict()
# create an instance of RateTableResponse from a dict
rate_table_response_from_dict = RateTableResponse.from_dict(rate_table_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


