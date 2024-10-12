# InfoTypeConfig

Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluate_list** | [**FilterList**](FilterList.md) |  | [optional] 
**ignore_list** | [**FilterList**](FilterList.md) |  | [optional] 
**strict_matching** | **bool** | If &#x60;TRUE&#x60;, infoTypes described by &#x60;filter&#x60; are used for evaluation. Otherwise, infoTypes are not considered for evaluation. For example: * Annotated text: \&quot;Toronto is a location\&quot; * Finding 1: &#x60;{\&quot;infoType\&quot;: \&quot;PERSON\&quot;, \&quot;quote\&quot;: \&quot;Toronto\&quot;, \&quot;start\&quot;: 0, \&quot;end\&quot;: 7}&#x60; * Finding 2: &#x60;{\&quot;infoType\&quot;: \&quot;CITY\&quot;, \&quot;quote\&quot;: \&quot;Toronto\&quot;, \&quot;start\&quot;: 0, \&quot;end\&quot;: 7}&#x60; * Finding 3: &#x60;{}&#x60; * Ground truth: &#x60;{\&quot;infoType\&quot;: \&quot;LOCATION\&quot;, \&quot;quote\&quot;: \&quot;Toronto\&quot;, \&quot;start\&quot;: 0, \&quot;end\&quot;: 7}&#x60; When &#x60;strict_matching&#x60; is &#x60;TRUE&#x60;: * Finding 1: 1 false positive * Finding 2: 1 false positive * Finding 3: 1 false negative When &#x60;strict_matching&#x60; is &#x60;FALSE&#x60;: * Finding 1: 1 true positive * Finding 2: 1 true positive * Finding 3: 1 false negative | [optional] 

## Example

```python
from openapi_client.models.info_type_config import InfoTypeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InfoTypeConfig from a JSON string
info_type_config_instance = InfoTypeConfig.from_json(json)
# print the JSON string representation of the object
print(InfoTypeConfig.to_json())

# convert the object into a dict
info_type_config_dict = info_type_config_instance.to_dict()
# create an instance of InfoTypeConfig from a dict
info_type_config_from_dict = InfoTypeConfig.from_dict(info_type_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


