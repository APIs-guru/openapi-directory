# Api

Api is a light-weight descriptor for an API Interface. Interfaces are also described as \"protocol buffer services\" in some contexts, such as by the \"service\" keyword in a .proto file, but they are different from API Services, which represent a concrete implementation of an interface as opposed to simply a description of methods and bindings. They are also sometimes simply referred to as \"APIs\" in other contexts, such as the name of this message itself. See https://cloud.google.com/apis/design/glossary for detailed terminology.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methods** | [**List[Method]**](Method.md) | The methods of this interface, in unspecified order. | [optional] 
**mixins** | [**List[Mixin]**](Mixin.md) | Included interfaces. See Mixin. | [optional] 
**name** | **str** | The fully qualified name of this interface, including package name followed by the interface&#39;s simple name. | [optional] 
**options** | [**List[Option]**](Option.md) | Any metadata attached to the interface. | [optional] 
**source_context** | [**SourceContext**](SourceContext.md) |  | [optional] 
**syntax** | **str** | The source syntax of the service. | [optional] 
**version** | **str** | A version string for this interface. If specified, must have the form &#x60;major-version.minor-version&#x60;, as in &#x60;1.10&#x60;. If the minor version is omitted, it defaults to zero. If the entire version field is empty, the major version is derived from the package name, as outlined below. If the field is not empty, the version in the package name will be verified to be consistent with what is provided here. The versioning schema uses [semantic versioning](http://semver.org) where the major version number indicates a breaking change and the minor version an additive, non-breaking change. Both version numbers are signals to users what to expect from different versions, and should be carefully chosen based on the product plan. The major version is also reflected in the package name of the interface, which must end in &#x60;v&#x60;, as in &#x60;google.feature.v1&#x60;. For major versions 0 and 1, the suffix can be omitted. Zero major versions must only be used for experimental, non-GA interfaces.  | [optional] 

## Example

```python
from openapi_client.models.api import Api

# TODO update the JSON string below
json = "{}"
# create an instance of Api from a JSON string
api_instance = Api.from_json(json)
# print the JSON string representation of the object
print(Api.to_json())

# convert the object into a dict
api_dict = api_instance.to_dict()
# create an instance of Api from a dict
api_from_dict = Api.from_dict(api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


