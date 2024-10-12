# ApisJson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apis** | [**List[ApisJsonApi]**](ApisJsonApi.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**offset** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.apis_json import ApisJson

# TODO update the JSON string below
json = "{}"
# create an instance of ApisJson from a JSON string
apis_json_instance = ApisJson.from_json(json)
# print the JSON string representation of the object
print(ApisJson.to_json())

# convert the object into a dict
apis_json_dict = apis_json_instance.to_dict()
# create an instance of ApisJson from a dict
apis_json_from_dict = ApisJson.from_dict(apis_json_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


