# PagespeedVersion

The Pagespeed Version object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major** | **str** | The major version number of PageSpeed used to generate these results. | [optional] 
**minor** | **str** | The minor version number of PageSpeed used to generate these results. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_version import PagespeedVersion

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedVersion from a JSON string
pagespeed_version_instance = PagespeedVersion.from_json(json)
# print the JSON string representation of the object
print(PagespeedVersion.to_json())

# convert the object into a dict
pagespeed_version_dict = pagespeed_version_instance.to_dict()
# create an instance of PagespeedVersion from a dict
pagespeed_version_from_dict = PagespeedVersion.from_dict(pagespeed_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


