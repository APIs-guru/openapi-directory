# Maintainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**kind** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.maintainer import Maintainer

# TODO update the JSON string below
json = "{}"
# create an instance of Maintainer from a JSON string
maintainer_instance = Maintainer.from_json(json)
# print the JSON string representation of the object
print(Maintainer.to_json())

# convert the object into a dict
maintainer_dict = maintainer_instance.to_dict()
# create an instance of Maintainer from a dict
maintainer_from_dict = Maintainer.from_dict(maintainer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


