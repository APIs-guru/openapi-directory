# NameValuePair

This type contains the name-value specifics of a multi-variation listing (<b>variationAspects</b>) or the name-value specifics for all item aspects of a linked line item (<b>linkedOrderLineItems</b>).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The text representing the name of the aspect for the name-value pair. For example, &lt;code&gt;color&lt;/code&gt;, or &lt;code&gt;Tire Type&lt;/code&gt;. | [optional] 
**value** | **str** | The value of the aspect for the name-value pair. For example, &lt;code&gt;red&lt;/code&gt;, or &lt;code&gt;All Season&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.name_value_pair import NameValuePair

# TODO update the JSON string below
json = "{}"
# create an instance of NameValuePair from a JSON string
name_value_pair_instance = NameValuePair.from_json(json)
# print the JSON string representation of the object
print(NameValuePair.to_json())

# convert the object into a dict
name_value_pair_dict = name_value_pair_instance.to_dict()
# create an instance of NameValuePair from a dict
name_value_pair_from_dict = NameValuePair.from_dict(name_value_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


