# Explicit

Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounds** | **List[float]** | The values must be monotonically increasing. | [optional] 

## Example

```python
from openapi_client.models.explicit import Explicit

# TODO update the JSON string below
json = "{}"
# create an instance of Explicit from a JSON string
explicit_instance = Explicit.from_json(json)
# print the JSON string representation of the object
print(Explicit.to_json())

# convert the object into a dict
explicit_dict = explicit_instance.to_dict()
# create an instance of Explicit from a dict
explicit_from_dict = Explicit.from_dict(explicit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


