# LinkedAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_account_id** | **str** | The ID of the linked account. | [optional] 
**services** | [**List[LinkService]**](LinkService.md) | List of provided services. | [optional] 

## Example

```python
from openapi_client.models.linked_account import LinkedAccount

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedAccount from a JSON string
linked_account_instance = LinkedAccount.from_json(json)
# print the JSON string representation of the object
print(LinkedAccount.to_json())

# convert the object into a dict
linked_account_dict = linked_account_instance.to_dict()
# create an instance of LinkedAccount from a dict
linked_account_from_dict = LinkedAccount.from_dict(linked_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


