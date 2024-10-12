# Ec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alphabet_sequence** | [**List[EcAlphabetSequenceInner]**](EcAlphabetSequenceInner.md) | **The penalty applied to each character that has been found to be part of an alphabet sequence.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  | [optional] 
**api_version** | **str** | **This API version number.**  | [optional] 
**detected_keyboard** | **str** | **The detected keyboard, QWERTY or Dvorak.**  | [optional] 
**efficiency** | **float** | **The ratio entropy / idealEntropy.**  It is a float number in the range [0, 1].  | [optional] 
**entropy** | **float** | **The entropy calculated for the input password.**  It is measured in bits.  | [optional] 
**entropy_distribution** | [**List[EcEntropyDistributionInner]**](EcEntropyDistributionInner.md) | **The distribution of the calculated entropy among the password characters.**  | [optional] 
**ideal_entropy** | **float** | **The Shannon entropy.**  The Shannon entropy is the entropy calculated if no penalizations - words, number sequence, alphabet sequence, etc - were found in the password.  It is measured in bits.  | [optional] 
**keyboard_sequence** | [**List[EcKeyboardSequenceInner]**](EcKeyboardSequenceInner.md) | **The penalty applied to each character that has been found to be part of a keyboard sequence.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  | [optional] 
**l33t_password** | **str** | The analyzed password after the l33t substitution. | [optional] 
**non_uniform_entropy_distribution_penalty** | **float** | **The penalty applied to the whole password because of irregular entropy distribution.**  This penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  | [optional] 
**number_sequence** | [**List[EcNumberSequenceInner]**](EcNumberSequenceInner.md) | **The penalty applied to each character that has been found to be part of a number sequence.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  | [optional] 
**password** | **str** | The analyzed password. | [optional] 
**password_length** | **int** | The number of characters the password has. | [optional] 
**penalty** | **float** | **The penalty applied to each character that has been found to be part of a word, number sequence, alphabet sequence, etc.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  Its value is equal to the value of the input parameter *penalty*.  | [optional] 
**repeated_chars** | [**List[EcRepeatedCharsInner]**](EcRepeatedCharsInner.md) | **The penalty applied to each character that are repeated**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.            | [optional] 
**request_id** | **str** | **The identifier of the request that corresponds to this response.**  | [optional] 
**request_timestamp** | **float** | **The timestamp for this response.**  Milliseconds from the epoch of 1970-01-01T00:00:00Z.  | [optional] 
**summary** | **List[str]** |  | [optional] 
**total** | [**List[EcTotalInner]**](EcTotalInner.md) | **The total penalty applied to each character.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  | [optional] 
**words** | [**List[EcWordsInner]**](EcWordsInner.md) | **The penalty applied to each character that has been found to be part of a word.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  | [optional] 

## Example

```python
from openapi_client.models.ec import Ec

# TODO update the JSON string below
json = "{}"
# create an instance of Ec from a JSON string
ec_instance = Ec.from_json(json)
# print the JSON string representation of the object
print(Ec.to_json())

# convert the object into a dict
ec_dict = ec_instance.to_dict()
# create an instance of Ec from a dict
ec_from_dict = Ec.from_dict(ec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


