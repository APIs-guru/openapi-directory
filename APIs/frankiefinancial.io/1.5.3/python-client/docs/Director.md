# Director


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **str** |  | [optional] 
**address2** | **str** |  | [optional] 
**address3** | **str** |  | [optional] 
**address4** | **str** |  | [optional] 
**address5** | **str** |  | [optional] 
**address6** | **str** |  | [optional] 
**birthdate** | **str** |  | [optional] 
**director_number** | **str** |  | [optional] 
**directorships** | [**ArrayOfDirectorship**](ArrayOfDirectorship.md) |  | [optional] 
**name** | **str** |  | [optional] 
**nationality** | **str** |  | [optional] 
**postcode** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.director import Director

# TODO update the JSON string below
json = "{}"
# create an instance of Director from a JSON string
director_instance = Director.from_json(json)
# print the JSON string representation of the object
print(Director.to_json())

# convert the object into a dict
director_dict = director_instance.to_dict()
# create an instance of Director from a dict
director_from_dict = Director.from_dict(director_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


