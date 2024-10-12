# Label

A key-value pair applied to a given object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of a label is a syntactically valid URL (as per RFC 1738) with the \&quot;scheme\&quot; and initial slashes omitted and with the additional restrictions noted below. Each key should be globally unique. The \&quot;host\&quot; portion is called the \&quot;namespace\&quot; and is not necessarily resolvable to a network endpoint. Instead, the namespace indicates what system or entity defines the semantics of the label. Namespaces do not restrict the set of objects to which a label may be associated. Keys are defined by the following grammar: key &#x3D; hostname \&quot;/\&quot; kpath kpath &#x3D; ksegment *[ \&quot;/\&quot; ksegment ] ksegment &#x3D; alphadigit | *[ alphadigit | \&quot;-\&quot; | \&quot;_\&quot; | \&quot;.\&quot; ] where \&quot;hostname\&quot; and \&quot;alphadigit\&quot; are defined as in RFC 1738. Example key: spanner.google.com/universe | [optional] 
**num_value** | **str** | An integer value. | [optional] 
**str_value** | **str** | A string value. | [optional] 

## Example

```python
from openapi_client.models.label import Label

# TODO update the JSON string below
json = "{}"
# create an instance of Label from a JSON string
label_instance = Label.from_json(json)
# print the JSON string representation of the object
print(Label.to_json())

# convert the object into a dict
label_dict = label_instance.to_dict()
# create an instance of Label from a dict
label_from_dict = Label.from_dict(label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


