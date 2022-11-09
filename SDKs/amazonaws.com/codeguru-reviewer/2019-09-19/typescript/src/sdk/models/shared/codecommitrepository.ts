import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CodeCommitRepository
/** 
 * Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.
**/
export class CodeCommitRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
