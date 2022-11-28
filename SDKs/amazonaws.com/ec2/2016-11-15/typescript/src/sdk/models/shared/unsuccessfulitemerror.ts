import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnsuccessfulItemError
/** 
 * Information about the error that occurred. For more information about errors, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">Error codes</a>.
**/
export class UnsuccessfulItemError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  message?: string;
}
