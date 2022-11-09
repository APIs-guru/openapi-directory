import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRecommendationError
/** 
 * <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>
**/
export class GetRecommendationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
