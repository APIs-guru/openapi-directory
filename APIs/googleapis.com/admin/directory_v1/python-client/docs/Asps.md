# Asps


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[Asp]**](Asp.md) | A list of ASP resources. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#aspList&#x60;. | [optional] [default to 'admin#directory#aspList']

## Example

```python
from openapi_client.models.asps import Asps

# TODO update the JSON string below
json = "{}"
# create an instance of Asps from a JSON string
asps_instance = Asps.from_json(json)
# print the JSON string representation of the object
print(Asps.to_json())

# convert the object into a dict
asps_dict = asps_instance.to_dict()
# create an instance of Asps from a dict
asps_from_dict = Asps.from_dict(asps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


