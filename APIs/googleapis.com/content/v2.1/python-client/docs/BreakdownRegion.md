# BreakdownRegion

Region with code and localized name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) | [optional] 
**name** | **str** | The localized name of the region. For region with code&#x3D;&#39;001&#39; the value is &#39;All countries&#39; or the equivalent in other languages. | [optional] 

## Example

```python
from openapi_client.models.breakdown_region import BreakdownRegion

# TODO update the JSON string below
json = "{}"
# create an instance of BreakdownRegion from a JSON string
breakdown_region_instance = BreakdownRegion.from_json(json)
# print the JSON string representation of the object
print(BreakdownRegion.to_json())

# convert the object into a dict
breakdown_region_dict = breakdown_region_instance.to_dict()
# create an instance of BreakdownRegion from a dict
breakdown_region_from_dict = BreakdownRegion.from_dict(breakdown_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


