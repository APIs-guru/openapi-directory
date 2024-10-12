# BeanstreamException


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **int** |  | [optional] 
**code** | **int** |  | [optional] 
**details** | [**List[Detail]**](Detail.md) |  | [optional] 
**message** | **str** |  | [optional] 
**reference** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.beanstream_exception import BeanstreamException

# TODO update the JSON string below
json = "{}"
# create an instance of BeanstreamException from a JSON string
beanstream_exception_instance = BeanstreamException.from_json(json)
# print the JSON string representation of the object
print(BeanstreamException.to_json())

# convert the object into a dict
beanstream_exception_dict = beanstream_exception_instance.to_dict()
# create an instance of BeanstreamException from a dict
beanstream_exception_from_dict = BeanstreamException.from_dict(beanstream_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


