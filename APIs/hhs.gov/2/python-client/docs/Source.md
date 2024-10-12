# Source


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acronym** | **str** |  | [optional] 
**contact_email** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**large_logo_url** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**small_logo_url** | **str** |  | [optional] 
**website_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


