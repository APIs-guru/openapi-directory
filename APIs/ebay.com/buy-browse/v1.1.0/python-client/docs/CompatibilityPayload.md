# CompatibilityPayload

An array of attribute name/value pairs used to define a specific product. For example: If you wanted to specify a specific car, one of the name/value pairs would be <br /><code>\"name\" : \"Year\", <br />\"value\" : \"2019\"</code>  <p> For a list of the attributes required for cars and trucks and motorcycles see <a href=\"/api-docs/buy/static/api-browse.html#Check\">Check compatibility</a> in the Buy Integration Guide.</p>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_properties** | [**List[AttributeNameValue]**](AttributeNameValue.md) | An array of attribute name/value pairs used to define a specific product. For example: If you wanted to specify a specific car, one of the name/value pairs would be &amp;quot;name&amp;quot; : &amp;quot;Year&amp;quot;, &amp;quot;value&amp;quot; : &amp;quot;2019&amp;quot; For a list of the attributes required for cars and trucks and motorcycles see Check compatibility in the Buy Integration Guide. | [optional] 

## Example

```python
from openapi_client.models.compatibility_payload import CompatibilityPayload

# TODO update the JSON string below
json = "{}"
# create an instance of CompatibilityPayload from a JSON string
compatibility_payload_instance = CompatibilityPayload.from_json(json)
# print the JSON string representation of the object
print(CompatibilityPayload.to_json())

# convert the object into a dict
compatibility_payload_dict = compatibility_payload_instance.to_dict()
# create an instance of CompatibilityPayload from a dict
compatibility_payload_from_dict = CompatibilityPayload.from_dict(compatibility_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


