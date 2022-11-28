import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRecommendationError
/** 
 * <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>
**/
export class GetRecommendationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
